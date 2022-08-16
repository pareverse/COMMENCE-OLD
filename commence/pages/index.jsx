import Head from 'next/head'
import * as C from '@chakra-ui/react'

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<C.Container py={6}>
				<C.Text fontWeight="medium">Home</C.Text>
			</C.Container>
		</>
	)
}

export default Home
