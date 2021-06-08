import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import c0 from '../images/c0.png'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import c7 from '../images/c7.png'
import c9 from '../images/c9.png'
import c10 from '../images/c10.png'
import c11 from '../images/c11.png'
import c12 from '../images/c12.png'
import c13 from '../images/c13.png'
import c14 from '../images/c14.png'
import c15 from '../images/c15.png'
import c16 from '../images/c16.png'
import c17 from '../images/c17.png'
import c18 from '../images/c18.png'
import c19 from '../images/c19.png'
import c20 from '../images/c20.png'
import c21 from '../images/c21.png'
import c22 from '../images/c22.png'
import { Button, Grid } from '@material-ui/core';
import { navigate } from "gatsby"


const profiles = [
    {
        key: 1,
        image: c1,
        name: "Ambra Curetti",
        linkedinurl: "https://www.linkedin.com/in/ambracuretti?originalSubdomain=ch",
        shortdescription: "test",
        testobj:
            <ul>
                <li>Digital Product Strategy</li>
                <li>Digital Product Development</li>
                <li>Software Teams and Offshoring</li>
            </ul>,
        longdescription: "Digital Product Strategy How to build a software? Which features? Where do I start? How do I go about the initial research? How do I launch my product?Digital Product Development What technologies are right for my product? Should I build a website or an app? Do I need a team of developers? What low-tech options are available?Software Teams and Offshoring How and where to find the right partner? What budget and timeline should I expect? How to build an engineering team? How to manage designers and developers? The best fit for my competencies are tech startups in need of a CTO or Product Manager. The industries where I have the most experience: Education, Consumer services and mobile apps"
    },
    {
        key: 2,
        image: c2,
        name: "Cécile Rouyer",
        linkedinurl: "https://www.linkedin.com/in/cecilerouyer/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 3,
        image: c3,
        name: "Anne Marie Schulte",
        linkedinurl: "https://www.linkedin.com/in/impactvision/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 4,
        image: c0,
        name: "Rauand Kreutzer",
        linkedinurl: "https://www.linkedin.com/in/rauand-kreutzer/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 5,
        image: c5,
        name: "Olga Elizarova",
        linkedinurl: "https://www.linkedin.com/in/olgaelizarova/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 6,
        image: c6,
        name: "Sarah Linder",
        linkedinurl: "https://www.linkedin.com/in/sarah-linder-530a0683/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 7,
        image: c7,
        name: "Isabelle Siegrist",
        linkedinurl: "https://www.linkedin.com/in/isabelle-siegrist-84a5a25b/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 8,
        image: c0,
        name: "Beatrice Scarioni",
        linkedinurl: "https://www.linkedin.com/in/beatrice-scarioni-7299894a/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 9,
        image: c9,
        name: "Rahel Gerber",
        linkedinurl: "https://www.linkedin.com/in/rahel-gerber-089b1527/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 10,
        image: c10,
        name: "Patrick Scheuerer",
        linkedinurl: "https://www.linkedin.com/in/patrickscheuerer/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 11,
        image: c11,
        name: "Ella Stuart",
        linkedinurl: "https://www.linkedin.com/in/ella-stuart/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 12,
        image: c12,
        name: "Connie Low",
        linkedinurl: "https://www.linkedin.com/in/connielow/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 13,
        image: c13,
        name: "Marina Hasler",
        linkedinurl: "https://www.linkedin.com/in/marina-hasler-b065b346/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 14,
        image: c14,
        name: "Adam Collins",
        linkedinurl: "https://www.linkedin.com/in/abcollins/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 15,
        image: c15,
        name: "Céline Bedu",
        linkedinurl: "https://www.linkedin.com/in/abcollins/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 16,
        image: c16,
        name: "Anja Nieveler",
        linkedinurl: "https://www.linkedin.com/in/anjanieveler/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 17,
        image: c17,
        name: "Emily Elsner",
        linkedinurl: "https://www.linkedin.com/in/emily-elsner-adams-b22833b2/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 18,
        image: c18,
        name: "Jeannine Brutschin",
        linkedinurl: "https://www.linkedin.com/in/jeanninebrutschin/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 19,
        image: c19,
        name: "Lucy Antrobus",
        linkedinurl: "https://www.linkedin.com/in/lucyantrobus/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 20,
        image: c20,
        name: "Alex Paur",
        linkedinurl: "https://www.linkedin.com/in/alexpaur/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAMcs2oB77u9bilumOg12r84keGS0Nuxk8A",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 21,
        image: c21,
        name: "Mariana Christen Jakob",
        linkedinurl: "https://www.linkedin.com/in/mariana-christen-jakob-29000a3b/?originalSubdomain=ch",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    },
    {
        key: 22,
        image: c22,
        name: "Anna Duszczynska",
        linkedinurl: "https://www.linkedin.com/in/anna-duszczynska/",
        shortdescription: "test",
        testobj: <li>Testobj</li>
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function AllCards() {
    return (
        <>
            <Grid container spacing={3}>
                {profiles.map(profile =>
                    <RecipeReviewCard
                        key={profile.key}
                        name={profile.name}
                        profilepic={profile.image}
                        shortdescription={profile.shortdescription}
                        linkedinurl={profile.linkedinurl}
                        testobj={profile.testobj}
                        longdescription={profile.longdescription}
                    ></RecipeReviewCard>
                )}
            </Grid>
        </>
    )
}

export function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>SIA</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.name}
                    subheader="Maybe some title?"
                />
                {props.testobj}
                <CardMedia
                    className={classes.media}
                    image={props.profilepic}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.shortdescription}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        variant="outlined"
                        color="primary"
                        onChange={() => { navigate(props.linkedinurl) }}>
                        <a href={props.linkedinurl}>Linkedin</a>
                    </Button>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{props.longdescription}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
