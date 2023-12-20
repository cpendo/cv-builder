import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faScrewdriverWrench, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFileLines, faFilePdf } from '@fortawesome/free-regular-svg-icons'


library.add(faFileLines, faScrewdriverWrench, faFilePdf, faTrash)

const contentIcon = icon({ prefix: 'far', iconName: 'file-lines' });
const customizeIcon = icon({ prefix: 'fas', iconName: 'screwdriver-wrench' });
const downloadIcon = icon({ prefix: 'far', iconName: 'file-pdf' })
const deleteIcon = icon({ prefix: 'fas', iconName: 'trash' })


export {contentIcon, customizeIcon, downloadIcon, deleteIcon};