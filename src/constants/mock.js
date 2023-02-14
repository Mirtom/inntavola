import React from 'react';
import {Product0, Product1, Product2, Product3} from '../assets';

export const PRODUCT_JSON = () => [
  {
    key: '001',
    category: 'primo',
    title: 'Mezzi paccheri polpo e olive nere',
    shortDescription:
      'Un primo piatto stuzzicante e saporito, il polpo viene prima...',
    fullDescription:
      'Un primo piatto stuzzicante e saporito, il polpo viene prima una descrizione completa',
    imageUri: Product0,
    quantity: 300,
  },
  {
    key: '002',
    category: 'primo',
    title: 'Flan di asparagi in crema di robiola',
    shortDescription: 'Gli asparagi accompagnati dalla toma piemontese form...',
    fullDescription:
      'Gli asparagi accompagnati dalla toma piemontese form una descrizione completa',
    imageUri: Product1,
    quantity: 250,
  },
  {
    key: '003',
    category: 'secondo',
    title: 'Cotoletta alla milanese',
    shortDescription:
      'Un piatto che piace sempre a tutti, sottile e croccante, la no...',
    fullDescription:
      'Un piatto che piace sempre a tutti, sottile e croccante, la no una descrizione completa',
    imageUri: Product2,
    quantity: 120,
  },
  {
    key: '004',
    category: 'primo',
    title: 'Patate rustiche al forno',
    shortDescription:
      'Impossibile non amare questo contorno tipico che sta bene...',
    fullDescription:
      'Impossibile non amare questo contorno tipico che sta bene una descrizione completa',
    imageUri: Product3,
    quantity: 300,
  },
  ,
];
