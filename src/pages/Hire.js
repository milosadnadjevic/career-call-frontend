// Employer hiring page
import { useState, useEffect } from 'react'
import Index from '../components/Index'
import HiresSelect from '../components/HiresSelect'
import Nav from '../components/Nav'

function Hire(props) {

    const [career, setCareer] = useState(null)
    
    const URL = 'http://localhost:3001/hires'

    const getCareer = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setCareer(data)
        } catch (error) {
            console.log('error performing task')
        }
    }

    const createCareer = async (newCareer) => {
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(newCareer),
            })
            getCareer()
        } catch (error) {
            console.log('error performing task')
        }
    }

    useEffect(() => {
        getCareer()
    }, [])

    return (
        <div>
            <Nav setCareer={setCareer}/>
            <Index career={career} />
            <HiresSelect career={career} createCareer={createCareer}/>
        </div>

    )
}

export default Hire