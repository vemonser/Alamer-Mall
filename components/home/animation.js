import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, }) => {
  const router = useRouter()
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledDiv
      // pass the router.locale as the key, so every time it change it will trigger the animation
        key={router.locale}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        mb={6}
      >
        {children}
      </StyledDiv>
    </AnimatePresence>
  )
}

export default function WithAnimation(Component) {
  return props => (
    <Section>
      <Component {...props} />
    </Section>
  )
}