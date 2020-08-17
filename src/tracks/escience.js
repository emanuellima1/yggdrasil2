import { BoxTypes } from '../definitions/constants'

export default {
  boxes: {
    left: [
      {
        title: 'Computação',
        classes: ['MAC0122'],
        type: BoxTypes.FREE,
      },
    ],
    right: [
      {
        title: 'Matemática',
        classes: ['MAT0222'],
        type: BoxTypes.FREE,
        minimum: 1,
      },
    ],
  },
}
