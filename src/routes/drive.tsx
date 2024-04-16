import { useEffect, useState } from "react";
import axios from "axios";
import StyledTable from "../components/table";

export const Drive = () => {
    const [files, setFiles] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null) 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/drive')
                console.log(response.data, 'drive response')
                setFiles(response.data)
            } catch (error: any) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        
        fetchData()
    }, [])

    if (loading) {
        return <div>Loading ...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            {files && <StyledTable data={files}/>}
        </div>
      );
}