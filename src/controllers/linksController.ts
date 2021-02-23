import { Request, Response } from 'express'
import { parseISO, isAfter} from 'date-fns'

import { Link } from '../models/link'
import linksRepository from '../models/linksRepository'

function generateCode(lenght: number) {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxwxyz0123456789'
    for (let i = 0; i < lenght; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

async function postLink(req: Request, res: Response) {

    const link = req.body as Link
    link.code = generateCode(8)

    const result = await linksRepository.add(link)

    if (!result) {
        return res.sendStatus(400)
    }

    link.id = result.id!

    return res.status(200).json({ newUrl: `http://localhost:8081/${link.code}` })
}

async function getLink(req: Request, res: Response) {   
    const code = req.params.code as string
    const link = await linksRepository.findByCode(code)
    
    if(!link){
        return res.status(404).json({ error: '404 - link not found'})
    }

    const dateExpired = link.dateExpired
    const date = new Date()

    const dataExPaser = parseISO(dateExpired)
    const past = isAfter(date, dataExPaser)

    if(past){
        return res.json({ msg: 'Link expired'})
    }


    return res.status(200).json({url: link.url}) 
    // return res.redirect(link.url) 
}

export default {
    postLink,
    getLink
}