import React from 'react';
import { addTestSelector } from '../../utils';
import { Container, Link, Separator } from './style';

export const HomeView = ({
  ...props
}) => {
  return (
    <Container>
      {
        navItems.map((item, itemIndex) => (
          <>
            <Link {...addTestSelector('nav-link')} >{ item.name }</Link>

            {itemIndex !== navItems.length-1 && <Separator />}
          </>
        ))
      }
    </Container>
  );
}

const navItems = [ 
  { name: 'PERSONAGENS',
    pathUrl: 'people'
  },
  { name: 'PLANETAS',
    pathUrl: 'planets'
  },
  { name: 'FILMES',
    pathUrl: 'films'
  },
  { name: 'ESPÉCIES',
    pathUrl: 'species'
  },
  { name: 'VEICULOS',
    pathUrl: 'vehicles'
  },
  { name: 'NAVES ESPACIAIS',
    pathUrl: 'starships'
  },
]