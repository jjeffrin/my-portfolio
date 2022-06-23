import { Text, Image, useColorMode, IconButton, HStack, Link, Divider, Container, Button, Heading, SlideFade, Icon } from '@chakra-ui/react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMoon, FaSun, FaTwitter, FaReact } from 'react-icons/fa'

import { SiChakraui } from 'react-icons/si'
import Typewriter from 'typewriter-effect';
import { Options } from 'typewriter-effect';
import standOut from './assets/stand_out.svg'

function AppNew() {

  const { colorMode, toggleColorMode } = useColorMode()

  const expCalc = () => {
    let expDiffMs = Date.now() - +new Date(2019, 4, 15);
    return ((expDiffMs / 1000) / 31540000).toFixed(1)
  }

  const downloadResume = () => {
    window.location.href = "/JeffrinJerome_Resume.pdf"
  }

  const typewriterOptions: Options = {
    loop: true
  }

  return (
    <SlideFade in={true}>
      <Container
        // backgroundImage={`url(${standOut})`}
        mt={8} color='gray.700'>
        <HStack justifyContent={'space-between'}>
          <Heading bgGradient={'linear(to-r, blue.500, green.400)'} bgClip={'text'} size={'lg'} fontWeight='black' letterSpacing={1}>
            <Typewriter onInit={(typer) => {
              typer
                .typeString('helloooooooo.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('வணக்கம்.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('bonjour.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('你好.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('ഹലോ.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('hola.')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('नमस्ते.')
                .start()
                .pauseFor(2000)
                .deleteAll()
            }} options={typewriterOptions} />
          </Heading>
          <IconButton
            aria-label="Toggle dark/light mode"
            size={'sm'}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            colorScheme={colorMode === "light" ? 'gray' : 'blue'}
            onClick={toggleColorMode}
          />
        </HStack>

        <Text fontSize={'sm'} fontWeight={'medium'} color='gray.500'>btw, hope you are having a great day and thank you for stopping by 😊</Text>

        <Heading
          fontWeight={'black'}
          color={colorMode === "light" ? 'gray.700' : 'gray.400'}
          mt={2}>my name is Jeffrin.</Heading>

        <Text mt={2} fontWeight={'bold'} color='gray.500'>i'm a Software Engineer from Nagercoil, India </Text>
        <Text fontWeight={'medium'} color='gray.500'>with an experience of {expCalc()} years.</Text>
        <Text mt={2} fontWeight={'medium'} color='gray.500'>at work, I use ASP.NET MVC, Kendo UI & JavaScript for the frontend and SQL Server for the backend.</Text>

        <Image mt={8} src={standOut} />

        <Divider my={8} />

        <Text fontSize={'sm'} mt={2} fontWeight={'medium'} color='gray.500'> also, I explore other frameworks, for use in my personal projects, during off hours. Recent works involve using Blazor and React ✨</Text>

        <HStack mt={8} justifyContent={'center'}>

          <Button colorScheme={colorMode === "light" ? 'gray' : 'blue'} onClick={downloadResume}>résumé</Button>

          <Link isExternal href="https://github.com/jjeffrin">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Github icon"
              icon={<FaGithub />}
            />
          </Link>

          <Link isExternal href="https://www.instagram.com/jjeffrin/">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Instagram icon"
              icon={<FaInstagram />}
            />
          </Link>

          <Link isExternal href="https://twitter.com/jjeffrin">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Twitter icon"
              icon={<FaTwitter />}
            />
          </Link>

          <Link isExternal href="https://www.linkedin.com/in/jeffrin-j/">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Linkedin icon"
              icon={<FaLinkedinIn />}
            />
          </Link>

          <Link isExternal href="https://www.facebook.com/profile.php?id=100009318853280">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Facebook icon"
              icon={<FaFacebookF />}
            />
          </Link>

          <Link isExternal href="mailto:jjeffrin@gmail.com">
            <IconButton
              colorScheme={colorMode === "light" ? 'gray' : 'blue'}
              aria-label="Mail icon"
              icon={<FaEnvelope />}
            />
          </Link>

        </HStack>

        <HStack my={4} justifyContent={'center'}>
          <Text fontSize={'sm'} fontWeight={'medium'} color='gray.500'>made using</Text>
          <Icon color={colorMode === "light" ? 'gray.500' : 'white'} as={FaReact} />
          <Text fontSize={'sm'} fontWeight={'medium'} color='gray.500'>and</Text>
          <Icon color={colorMode === "light" ? 'gray.500' : 'white'} as={SiChakraui} />
        </HStack>
      </Container>
    </SlideFade>
  );
}

export default AppNew;
