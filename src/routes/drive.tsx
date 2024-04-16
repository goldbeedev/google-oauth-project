import { useEffect, useState } from "react";
import axios from "axios";
import StyledTable from "../components/table";
import tw from 'twin.macro'

export const Drive = () => {
    const [files, setFiles] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null) 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/drive')
                setFiles(response.data.files)
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
        <div tw='flex items-center justify-center'>
            {files && <StyledTable data={files}/>}
        </div>
      );
}