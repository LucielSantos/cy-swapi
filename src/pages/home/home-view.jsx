import React from 'react';
import { useEffect } from 'react';
import { addTestSelector, setTitle } from '../../utils';
import { Container, Link, Separator } from './style';

export const HomeView = ({
  history,
}) => {

  useEffect(() => {
    setTitle(false);
  }, []);

  const onClickLink = (path) => {
    history.push(`/${path}`)
  };

  return (
    <Container>
      {
        navItems.map((item, itemIndex) => (
          <>
            <Link 
              {...addTestSelector('nav-link')}
              onClick={() => onClickLink(item.pathUrl)}
            >
              { item.name }
            </Link>

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
    pathUrl: 'planet'
  },
  { name: 'FILMES',
    pathUrl: 'film'
  },
  { name: 'ESPÉCIES',
    pathUrl: 'specie'
  },
  { name: 'VEÍCULOS',
    pathUrl: 'vehicle'
  },
  { name: 'NAVES ESPACIAIS',
    pathUrl: 'starship'
  },
]