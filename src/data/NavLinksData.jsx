import PagePortfolio from '../components/PagePortfolio/PagePortfolio';

export const NavLinksData = [
    {
        id: 1,
        title: "Home",
        url: "/",
        pageElement: "<PageHome />",
        cName: "",

    },
    {
        id: 2,
        title: "services",
        url:   "/Services",
        pageElement: "<PageServices  />",
        cName: ""
       
    },
    {
        id: 3,
        title: "Portfolio",
        url:   "/Portfolio",
        pageElement: "PagePortfolio",
        cName: ""
       
    },
    {
        id: 4,
        title: "Our team",
        url:   "/Team",
        pageElement: "<PageOurTeam   />",
        cName: ""
    },
    {
        id: 5,
        title: "Our blog",
        url:   "/our-blog",
        pageElement: "<PageOurBlog   />",
        cName: ""
    },
    {
        id: 6,
        title: "Contuct us",
        url:   "/contuct-us",
        pageElement: "<PageContactUs />",
        cName: ""
    }
]