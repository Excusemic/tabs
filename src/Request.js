import { useState, useEffect } from "react"

const Request = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const url = "https://course-api.com/react-tabs-project"

  const fetchdata = async () => {
    const req = await fetch(url)
    const data = await req.json()
    if (req.status >= 200 && req.status <= 299) {
      return data
    } else {
      throw new Error("there was an error!")
    }
  }
  useEffect(() => {
    fetchdata()
      .then((req) => {
        setIsLoading(false)
        setIsError(false)
        setData(req)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      })
  }, [])
  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "There was an error."
  }
  return data
}

export default Request
