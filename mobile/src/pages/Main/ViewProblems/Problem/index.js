import React from 'react';
import { parseISO, format } from 'date-fns';

import { Container, DivDescription, Description, Date } from './styles';

export default function Problem({ data }) {
  return (
    <Container>
      <DivDescription>
        <Description>{data.description}</Description>
      </DivDescription>
      <Date>{format(parseISO(data.created_at), 'dd/MM/yyyy')}</Date>
    </Container>
  );
}
