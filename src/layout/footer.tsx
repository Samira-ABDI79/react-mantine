import { createStyles, Group, rem } from '@mantine/core';
import {  IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../main';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '24px',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray2 bottom-0   ml-[20%] p-[24px] flex items-center justify-between     ">
      
      <p>{user.name}</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
         <Link to={user.github} >
         <IconBrandGithub size="1.7rem" className=" hover:text-gray" stroke={1.5} />
         </Link>
            
      
       <Link to={user.linkdin}> <IconBrandLinkedin size="1.7rem" className=" hover:text-gray" stroke={1.5} />
       </Link>
           
     
  
           
   
        </Group>
     
    </div>
  );
}