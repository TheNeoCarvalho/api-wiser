import linkModel, { ILinkModel } from './linkModel'
import { Link } from './link'

function findByCode(code: string) {
    return linkModel.findOne<ILinkModel>({
        where: {
            code
        }
    })
}

function add(link: Link) {
    return linkModel.create<ILinkModel>(link)
}

export default {
    findByCode,
    add
}
