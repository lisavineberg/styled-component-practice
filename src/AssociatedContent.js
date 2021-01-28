import Container from './components/Container.js';
import H2, {H3} from './components/Typography.js';
import TwoCol from './components/TwoCol.js';
import List from './components/List.js';
import ListItem from './components/ListItem.js';

const content = [
    { title: "Events", 
            viewAll: {
                title: "View all events",
                url: "www.appdirect.com"
            },        items: [
            {title: "Engage 2021",
                subtitle: "October 05 - October 07, 2021",
                url: "www.appdirect.com"}
        ]},
    { title: "Blog",
        viewAll: {
            title: "View all blog entries",
            url: "www.appdirect.com"
        },
        items: [
            {title: "How Martketplaces Accelerate B2B Commerce Transformation",
                subtitle: "January 12, 2021",
                url: "www.appdirect.com"},
            {title: "Introducing the AppDirect GraphQL API",
                subtitle: "December 20, 2020",
                url: "www.appdirect.com"},
            {title: "B2B Subscription Commerce: Providing Resilience in Turbulent Times",
                subtitle: "December 11, 2020",
                url: "www.appdirect.com"}
        ]}
];

function AssociatedContent() {
  return (
    <Container>
        <H2 text={"New from AppDirect"} textAlign={"center"}></H2>
        <TwoCol>
            {content.map(item => 
                <div>
                    <H3>{item.title}</H3>
                    <List>
                        {item.items.map((listItem, index) => <ListItem key={index} value={listItem}></ListItem>)}
                        {item.viewAll ? <ListItem key="viewAll" value={item.viewAll} textTransform="uppercase"></ListItem> : ""}
                    </List>
                </div>
            )}
        </TwoCol>
    </Container>
  );
}

export default AssociatedContent;
