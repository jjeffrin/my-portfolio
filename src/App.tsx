import { Text, VStack, Image, useColorMode, IconButton, HStack, Link, Divider, Container } from '@chakra-ui/react';
import Header from './components/Header'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMoon, FaSun, FaTwitter } from 'react-icons/fa'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const expCalc = () => {
    let expDiffMs = Date.now() - +new Date(2019, 4, 15);
    return ((expDiffMs / 1000) / 31540000).toFixed(1)
  }

  return (
    <>
      <VStack alignSelf="flex-start" p="4">
        <IconButton
          aria-label="Toggle dark/light mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Header title="Hey. Hi. Hello." />
        <Text
          fontWeight="medium"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >Hope you are having a great day and thanks for stopping by!</Text>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/Reebok_Profile.jpg"
          alt="Jeffrin J"
        />
        <Text
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >Btw, my name is Jeffrin J
        </Text>
        <Text
          fontSize="md"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Software Engineer ({expCalc()} Years experience)
          <br />
          Tech stack: ASP.NET MVC, JavaScript, SQL Server
        </Text>
        <br />
        <Container>

          <Divider />
          <br />
          <Text
            fontWeight="medium"
            textAlign="center"
          >
            I also explore other frameworks, for use in my personal projects, during off hours. Recent works involve using Blazor and React.
          </Text>
          <br />
          <Text
            fontWeight="medium"
            textAlign="center"
          >
            Reach out to me using any of the platforms listed below,
          </Text>
        </Container>

        <HStack>
          <Link isExternal href="https://github.com/jjeffrin">
            <IconButton
              aria-label="Github icon"
              icon={<FaGithub />}
            />
          </Link>

          <Link isExternal href="https://www.instagram.com/jjeffrin/">
            <IconButton
              aria-label="Instagram icon"
              icon={<FaInstagram />}
            />
          </Link>

          <Link isExternal href="https://twitter.com/jjeffrin">
            <IconButton
              aria-label="Twitter icon"
              icon={<FaTwitter />}
            />
          </Link>

          <Link isExternal href="https://www.linkedin.com/in/jeffrin-j/">
            <IconButton
              aria-label="Linkedin icon"
              icon={<FaLinkedinIn />}
            />
          </Link>

          <Link isExternal href="https://www.facebook.com/profile.php?id=100009318853280">
            <IconButton
              aria-label="Facebook icon"
              icon={<FaFacebookF />}
            />
          </Link>

          <Link isExternal href="mailto:jjeffrin@gmail.com">
            <IconButton
              aria-label="Mail icon"
              icon={<FaEnvelope />}
            />
          </Link>

        </HStack>
      </VStack>
    </>
  );
}

export default App;
