import { createStyles, Container, Group, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';


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
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

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

  return (
    <div className="bg-gray2 bottom-0 fixed w-full">
      <Container className={classes.inner}>
      <p>Samira abdi</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
         
            <IconBrandGithub size="1.7rem" className=" hover:text-gray" stroke={1.5} />
      
       
            <IconBrandLinkedin size="1.7rem" className=" hover:text-gray" stroke={1.5} />
     
  
            <IconBrandInstagram size="1.7rem" className=" hover:text-gray" stroke={1.5} />
   
        </Group>
      </Container>
    </div>
  );
}