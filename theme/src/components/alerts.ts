import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

const success = defineStyle({
  container: {
    background: 'green.50',
    borderColor: 'green.200',
    color: 'green.800',
  },
  icon: {
    color: 'green.500',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'green.700',
  },
})

const error = defineStyle({
  container: {
    background: 'red.50',
    borderColor: 'red.200',
    color: 'red.800',
  },
  icon: {
    color: 'red.500',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'red.700',
  },
})

const warning = defineStyle({
  container: {
    background: 'yellow.50',
    borderColor: 'yellow.200',
    color: 'yellow.800',
  },
  icon: {
    color: 'yellow.500',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'yellow.700',
  },
})

const info = defineStyle({
  container: {
    background: 'blue.50',
    borderColor: 'blue.200',
    color: 'blue.800',
  },
  icon: {
    color: 'blue.500',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'blue.700',
  },
})

const variants = {
  success,
  error,
  warning,
  info,
}

export const alertTheme = defineStyleConfig({
  variants,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
