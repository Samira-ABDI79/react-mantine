
import {
  Card,
  Image,
  Text,
  Group,
 
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;

  description: string;
 
}

export function BadgeCard({ image, title, description,  }: BadgeCardProps) {
  const { classes } = useStyles();



  return (
    <Card   p="md" className={classes.card}  style={{ borderRadius:0 }}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
         
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

     

     
    </Card>
  );
}