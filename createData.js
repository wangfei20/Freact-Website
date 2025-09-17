import fs from "fs/promises"
import { remark } from 'remark';
import toHtml from 'remark-html';

async function createData(){
    try {
        const source = await fs.readFile('src/index.md', 'utf8');

    const processed = await remark().use(toHtml).process(source)
    let content = processed.value

    content = content.replace(/<h2/img, (match,index)=>{
        return `${match} id="part-${index}"`
    })

    await fs.writeFile('public/doc.json',JSON.stringify({content}))
    console.log("finished");
    } catch (error) {
        console.log(error);
    }
}
createData()