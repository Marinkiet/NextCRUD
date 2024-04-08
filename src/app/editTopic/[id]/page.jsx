import EditTopicForm from "@/app/editTopic/EditTopicForm";

const getTopicById = async(id)=>{

    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
            cache:"no-store" //delete cache

        }) 

        if(!res.ok){
            throw new Error ("Failed to fetch topic")
        }

        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function EditTopic({params}){

    const {id} = params;
    //console.log(id)
    //desctructure id,title and description
    const {topic} = await getTopicById(id);
    const {title,description} = topic;
    return(
        <EditTopicForm id={id} title={title} description={description}/>
    )
}