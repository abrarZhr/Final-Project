import axios from "axios"



const please = ()=>{

    const [please , setPlease ]=useState()


    useEffect(() => {
        axios.get(`http://localhost:5000/app/admin/getPlease/${id}`)
        .then ((res)=>{
            setPlease(res.data)
        })
        
    }, [])


    const addPlease =(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:5000/app/admin/CreatePleace/${id}` ,{

            data:{
                type:e.target.form[0].value,
                image:target.form[1].value,
                description:target.form[2].value,
                location:target.form[3].value,
            }

        })
        .then((res)=>{
            setPlease(res.data)
        })
    }

    return(

        <>
        




















        </>

    )



}