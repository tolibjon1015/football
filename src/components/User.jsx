import { Box, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser] = useState()
    const [failed, setFailed] = useState(false)
    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
            .catch(err => {
                setFailed(err)
            })
    }, [])

    if (!failed) {
        return <Text>hato</Text>
    }

    return (
        <div>
            {user?.map((item) => {
                return <Box>

                </Box>
            })}
        </div>
    )
}

export default User