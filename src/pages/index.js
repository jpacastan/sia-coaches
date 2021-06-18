import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import c23 from '../images/c23.png'
import { Button, Grid } from '@material-ui/core';
import { navigate } from "gatsby"


const profiles = [
    {
        key: 1,
        image: c1,
        name: "Ambra Curetti",
        mailaddress: "ambra@curintech.com",
        linkedinurl: "https://www.linkedin.com/in/ambracuretti?originalSubdomain=ch",
        shortdescription: "Founder at Curintech",
        fewpoints:
            <ul>
                <li><Typography>Digital Product Strategy</Typography></li>
                <li><Typography>Digital Product Development</Typography></li>
                <li><Typography>Software Teams and Offshoring</Typography></li>
            </ul>,
        longdescription: "Digital Product Strategy How to build a software? Which features? Where do I start? How do I go about the initial research? How do I launch my product?Digital Product Development What technologies are right for my product? Should I build a website or an app? Do I need a team of developers? What low-tech options are available?Software Teams and Offshoring How and where to find the right partner? What budget and timeline should I expect? How to build an engineering team? How to manage designers and developers? The best fit for my competencies are tech startups in need of a CTO or Product Manager. The industries where I have the most experience: Education, Consumer services and mobile apps"
    },
    {
        key: 2,
        image: c2,
        name: "Cécile Rouyer",
        mailaddress: "rouyerjob@hotmail.com",
        linkedinurl: "https://www.linkedin.com/in/cecilerouyer/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Market positioning</Typography></li>
                <li><Typography>Corporate strategy </Typography></li>
                <li><Typography>Business plan</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 3,
        image: c3,
        name: "Anne Marie Schulte",
        mailaddress: "am.schulte@impact-vision.org",
        linkedinurl: "https://www.linkedin.com/in/impactvision/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>(Self-)leadership coaching</Typography></li>
                <li><Typography>Team coaching</Typography></li>
                <li><Typography>Health and stress management</Typography></li>
            </ul>,
        longdescription: "(self-)leadership coaching: working with the limbic system to achieve effective and lasting results, understanding clarity of purpose & individual value alignment, creating a success mindset to play to win (love-based), integrating empowering beliefs, etc.team coaching to build effective virtual or face to face teams and maintain high levels of motivation and engagementhealth & stress management: managing stress in changing times through a toolkit for effective energy management"
    },
    {
        key: 4,
        image: c0,
        name: "Rauand Kreutzer",
        mailaddress: "r.kreutzer@posteo.de",
        linkedinurl: "https://www.linkedin.com/in/rauand-kreutzer/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Corporate and business development</Typography></li>
                <li><Typography>Strategy design and implementation</Typography></li>
                <li><Typography>Agile innovation and methods</Typography></li>
                <li><Typography>Project, change and transformation management</Typography></li>
            </ul>,
        longdescription: "Corporate & business development, strategy design & implementationAgile innovation and methods (especially business model generation, customer value proposition/customer centricity)Project, change and transformation managemen"
    },
    {
        key: 5,
        image: c5,
        name: "Olga Elizarova",
        mailaddress: "olga@playcollaboratechange.com",
        linkedinurl: "https://www.linkedin.com/in/olgaelizarova/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Behavioral science/behavioral design</Typography></li>
                <li><Typography>User research</Typography></li>
                <li><Typography>Design thinking</Typography></li>
            </ul>,
        longdescription: "Behavioral science/behavioral design Apply behavioral science principles and best practices to product/service design, data collection and analysis, and product strategy Identify behavioral barriers and facilitators relevant for the company's target behavior(s) Help build behavioral science strategy for the product/service, experience or communication around it (i.e. strategies that could be tested to increase donations or engagement)Research User research - mixed methods, quantitative and qualitative Creating surveys Writing moderator's guides for interviews Analyzing and synthesizing research Translating research into product/service recommendations Help develop research summaries of design, content and strategy implications for product or serviceDesign thinking (or user-centered design) Applying co-design to bring in people affected by the problem into the process of shaping solution Map people's experiences and align it with company's product/service experience (i.e. journey mapping) Identify and capture opportunities for product/service improvement from users' perspectives (unmet needs) Apply design thinking best practices to product/service to improve adoption and engagement"
    },
    {
        key: 6,
        image: c6,
        name: "Sarah Linder",
        mailaddress: "sarah.linder@seif.org",
        linkedinurl: "https://www.linkedin.com/in/sarah-linder-530a0683/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Impact management</Typography></li>
                <li><Typography>Impact measurement</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 7,
        image: c7,
        name: "Isabelle Siegrist",
        mailaddress: "isabelle@sand-born.com",
        linkedinurl: "https://www.linkedin.com/in/isabelle-siegrist-84a5a25b/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Pitching </Typography></li>
                <li><Typography>Market entry</Typography></li>
                <li><Typography>Marketing, sales</Typography></li>
                <li><Typography>Fundraising</Typography></li>
                <li><Typography>Finance</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 8,
        image: c0,
        name: "Beatrice Scarioni",
        mailaddress: "beatrice.scarioni@epfl.ch",
        linkedinurl: "https://www.linkedin.com/in/beatrice-scarioni-7299894a/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Connecting tech, innovation and social Impact</Typography></li>
                <li><Typography>Impact measurement targeted to impact ventures</Typography></li>
                <li><Typography>Impact analytics targeted to impact venture</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 9,
        image: c9,
        name: "Rahel Gerber",
        mailaddress: "rahel.gerber@fundament.swiss",
        linkedinurl: "https://www.linkedin.com/in/rahel-gerber-089b1527/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Strategy & business development</Typography></li>
                <li><Typography>Investment readiness & fundraising</Typography></li>
                <li><Typography>Software Teams and Offshoring</Typography></li>
                <li><Typography>Impact measurement</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 10,
        image: c10,
        name: "Patrick Scheuerer",
        mailaddress: "patrick@xpreneurs.co",
        linkedinurl: "https://www.linkedin.com/in/patrickscheuerer/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Participatory and democratic governance</Typography></li>
                <li><Typography>Ownership structures</Typography></li>
                <li><Typography>Organizational development</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 11,
        image: c11,
        name: "Ella Stuart",
        mailaddress: "ella@bravelycoaching.co.nz",
        linkedinurl: "https://www.linkedin.com/in/ella-stuart/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Mental Health</Typography></li>
                <li><Typography>Resilience and personal development as an entrepreneur</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 12,
        image: c12,
        name: "Connie Low",
        mailaddress: "connie.low@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/connielow/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Teal principles and organization development</Typography></li>
                <li><Typography>sustainable supply chain</Typography></li>
                <li><Typography>SDGs in general</Typography></li>
                <li><Typography>Intercultural collaboration</Typography></li>
                <li><Typography>HR, Recruitment and onboarding, teambuilding</Typography></li>
            </ul>,
        longdescription: "Teal principles and organization developmentsustainable supply chain (human rightsTeal principles and organization developmentsustainable supply chain (human rights / environmental issues / due diligence)sustainability / SDGs in generalintercultural collaborationrecruitment and onboardingteam building and HR / environmental issues / due diligence)sustainability / SDGs in generalintercultural collaborationrecruitment and onboardingteam building and HR"
    },
    {
        key: 13,
        image: c13,
        name: "Marina Hasler",
        mailaddress: "marina.hasler@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/marina-hasler-b065b346/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:

            <ul>
                <li><Typography>Introduction into sustainable entrepreneurship in Switzerland</Typography></li>
                <li><Typography>Materiality analysis</Typography></li>
                <li><Typography>Sustainable Business Plan</Typography></li>
                <li><Typography>Teal principles and organization development</Typography></li>
                <li><Typography>Sustainability / SDGs in general</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 14,
        image: c14,
        name: "Adam Collins",
        mailaddress: "adam.collins@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/abcollins/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Impact logic and measurement</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 15,
        image: c15,
        name: "Céline Bedu",
        mailaddress: "celine.bedu@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/abcollins/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Teal principles and organization development</Typography></li>
                <li><Typography>PowerPoint and presentation design</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 16,
        image: c16,
        name: "Anja Nieveler",
        mailaddress: "anja.nieveler@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/anjanieveler/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Community building, space management</Typography></li>
                <li><Typography>Workshop facilitation on OKRs...</Typography></li>
                <li><Typography>Development, impact measurement</Typography></li>
                <li><Typography>Event moderation, group facilitation, non-violent communication...</Typography></li>
                <li><Typography>Program setup, creation, timelines, management</Typography></li>
            </ul>,
        longdescription: "Community Building and space managementworkshop facilitation on OKRs/ Goal setting, Ideation, Business Modelling, Team building exercises, Business Plan Development, Impact Measurementevent moderation, group facilitation, topic definition, Online events, World cafesnon-violent communicationprogram setup, creation, timelines, management"
    },
    {
        key: 17,
        image: c17,
        name: "Emily Elsner",
        mailaddress: "emilyadams13@gmail.com",
        linkedinurl: "https://www.linkedin.com/in/emily-elsner-adams-b22833b2/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Organizational learning</Typography></li>
                <li><Typography>Impact measurement</Typography></li>
                <li><Typography>Education and programme design</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 18,
        image: c18,
        name: "Jeannine Brutschin",
        mailaddress: "jeannine.brutschin@villageoffice.ch",
        linkedinurl: "https://www.linkedin.com/in/jeanninebrutschin/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Community building</Typography></li>
                <li><Typography>Sociocracy/self-organization</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 19,
        image: c19,
        name: "Lucy Antrobus",
        mailaddress: "lucyantro@gmail.com",
        linkedinurl: "https://www.linkedin.com/in/lucyantrobus/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>High-impact pitching</Typography></li>
                <li><Typography>Storytelling</Typography></li>
                <li><Typography>Confidence, resilience, team- and trust building</Typography></li>
                <li><Typography>Lean-style process improvement, kaizen, optimisation and efficiency mechanisms</Typography></li>
                <li><Typography>Strategy definition, stakeholder cascade processes</Typography></li>
                <li><Typography>Creativity</Typography></li>
                <li><Typography>Group needs, empowerment, problem solving</Typography></li>
            </ul>,
        longdescription: "high-impact pitching, storytelling (owning their origin story and connecting their strengths and background to their social impact business), confidence & resilience and/or team trust-building, lean-style process improvement / kaizen / optimisation & efficiency mechanisms, strategy definition and stakeholder cascade processes, creativity (how to generate ideas of demand with stakeholders of any background scientific or creative), general more deep listening to identify group needs and empower them on how to problem-solve"
    },
    {
        key: 20,
        image: c20,
        name: "Alex Paur",
        mailaddress: "alex.paur@impacthub.net",
        linkedinurl: "https://www.linkedin.com/in/alexpaur/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAMcs2oB77u9bilumOg12r84keGS0Nuxk8A",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Impact and profit: Financial modelling, planning and reporting for start-ups</Typography></li>
                <li><Typography>DISG model, communication skills</Typography></li>
            </ul>,
        longdescription: "Financial modelling, planning & reporting for star-tups, social impact finance (impact & profit)interpersonal and leadership communication (DISG model, communication skills"
    },
    {
        key: 21,
        image: c21,
        name: "Mariana Christen Jakob",
        mailaddress: "mcj@seif.org",
        linkedinurl: "https://www.linkedin.com/in/mariana-christen-jakob-29000a3b/?originalSubdomain=ch",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Impact Finance</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 22,
        image: c22,
        name: "Anna Duszczynska",
        mailaddress: "anna.duszczynska@adnewworld.org",
        linkedinurl: "https://www.linkedin.com/in/anna-duszczynska/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Branding</Typography></li>
                <li><Typography>Branding strategy and design</Typography></li>
                <li><Typography>Conscious brand identify</Typography></li>
            </ul>,
        longdescription: "No further details"
    },
    {
        key: 23,
        image: c23,
        name: "Michael Mosimann",
        mailaddress: "Michael.Mosimann@eversheds-sutherland.ch",
        linkedinurl: "https://www.linkedin.com/in/michael-mosimann-35805b111/",
        shortdescription: "",
        fewpoints:
            <ul>
                <li><Typography>Legal structures for scaling</Typography></li>
            </ul>,
        longdescription: "No further details"
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
}));

export default function AllCards() {
    return (
        <>
            <Grid container spacing={2}>
                {profiles.map(profile =>
                    <RecipeReviewCard
                        key={profile.key}
                        name={profile.name}
                        profilepic={profile.image}
                        shortdescription={profile.shortdescription}
                        linkedinurl={profile.linkedinurl}
                        mailaddress={profile.mailaddress}
                        fewpoints={profile.fewpoints}
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
                    title={props.name}
                    subheader={props.shortdescription}
                />
                {props.fewpoints}
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
                    <div style={{ margin: 'auto' }}>
                        <Button
                            style={{margin: 10}}
                            variant="outlined"
                            color="primary"
                            onChange={() => { navigate(props.linkedinurl) }}>
                            <a href={props.linkedinurl}>Linkedin</a>
                        </Button>
                        <Button
                            style={{margin: 10}}
                            onClick={() => { navigator.clipboard.writeText(props.mailaddress) }}
                            variant="outlined"
                            color="primary"
                        >
                            Copy email
                        </Button>
                    </div>
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
