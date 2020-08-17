import { BoxTypes, ClasseTypes } from '../definitions/constants'

export default {
  boxes: {
    left: [
      {
        title: 'Física',
        classeType: ClasseTypes.MANDATORY,
        classes: [
          '4302111',
          '4302113',
          '4302112',
          '4302114',
          '4302211',
          '4302213',
          '4302204',
          '4302212',
          '4302214',
          '4302305',
          '4302311',
          '4302313',
          '4302303',
          '4302401',
          '4302403'
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Outras Optativas',
        classes: ['GMG0630', 'IOF0249', 'IOF0201', 'IOF0210'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
    right: [
      {
        title: 'Matemática',
        classeType: ClasseTypes.STATISTICS,
        classes: [
          'MAT0111',
          'MAT0112',
          'MAT0121',
          'MAT0122',
          'MAT0216',
          'MAT0220'
        ],
        type: BoxTypes.COMPLETE_ALL,
        minimum: 1,
      },
      {
        title: 'Computação',
        classeType: ClasseTypes.SCIENCE,
        classes: ['MAC0115', 'MAP0214'],
        type: BoxTypes.COMPLETE_ALL,
        minimum: 1,
        addable: false,
        addingId: 'computacao',
      },
      {
        title: 'Química',
        classes: ['QFL0606'],
        type: BoxTypes.COMPLETE_ALL,
        addable: false,
        addingId: 'quimica',
      },
    ],
  },
}
