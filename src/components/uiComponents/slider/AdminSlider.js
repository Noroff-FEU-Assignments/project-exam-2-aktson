import React from 'react';
import userAvatar from "../../../assets/user.png"
import Carousel from 'better-react-carousel'
import TabsInner from './TabsInner';



function AdminSlider({ user }) {

    const breakpoints = [
        {
            breakpoint: 560,
            cols: 2,
            rows: 1,
            gap: 2,
            loop: true,
        },
        {
            breakpoint: 1050,
            cols: 3,
            rows: 1,
            gap: 2,
            loop: true,
        },

    ]

    const [toggleState, setToggleState] = React.useState("all");

    const handleFollowingClick = (index) => {
        setToggleState(index);
    }

    const handleFollowersClick = (index) => {
        setToggleState(index);

    }

    const handlePostsClick = (index) => {
        setToggleState(index);
    }


    return (

        <div className='section mt-16 mb-0'>
            <div className="tabs-container ">
                <div className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handlePostsClick(1)}>
                    Posts
                </div>
                <div className={toggleState === 2 ? "tab-header active-tab" : "tab-header "} onClick={() => handleFollowingClick(2)}>
                    Followers
                </div>
                <div className={toggleState === 3 ? " tab-header active-tab" : "tab-header"} onClick={() => handleFollowersClick(3)}>
                    Following
                </div>
            </div>
            <div className="tabs-content">
                <div className={toggleState === 1 ? " active-tab-content tab-content " : "  tab-content"}>
                    <TabsInner user={user.followers} />
                </div>
                <div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>
                    <TabsInner user={user.following} />
                </div>
                <div className={toggleState === 3 ? " active-tab-content tab-content " : "  tab-content"}>
                    <TabsInner user={user.followers} />
                </div>
            </div>


        </div >

    )
}

export default AdminSlider


// max-w-md sm:max-w-xl  lg:max-w-3xl xl:max-w-4xl

{/* <Tabs id="custom-animation" value="html" className="max-w-2xl w-full">
<TabsHeader>
    <Tab key={"followers"} value={"followers"} >
        Followers
    </Tab>
    <Tab key={"following"} value={"following"} >
        Following
    </Tab>
</TabsHeader>
<TabsBody animate={{ mount: { y: 0 }, unmount: { y: 250 }, }} >
    <TabPanel key={"followers"} value={"followers"}>
        <div className=' bg-white p-4 rounded-xl '>
            {followers && followers?.length === 0 ? <p className='text-center'>Not Following anyone</p> :
                <Carousel cols={2} rows={1} gap={10} loop responsiveLayout={breakpoints}
                    mobileBreakpoint={400}
                    containerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}
                >
                    {followers && followers.map(follower => {
                        return <Carousel.Item key={follower.name}>
                            <img src={follower.avatar ? follower.avatar : userAvatar} className="w-36 h-36 bg-white rounded-xl" alt={follower.name} />
                            <h4 className='text-center'>{follower.name}</h4>
                        </Carousel.Item>
                    })}
                </Carousel>}
        </div>
    </TabPanel>
    <TabPanel key={"following"} value={"following"}>
        <div className=' bg-white p-4 rounded-xl'>
            {following && following?.length === 0 ? <p className='text-center'>No Followers yet</p> :
                <Carousel cols={2} rows={1} gap={1} loop responsiveLayout={breakpoints} mobileBreakpoint={400} >
                    {following && following.map(follwoing => {
                        return <Carousel.Item key={follwoing.name}>
                            <img src={follwoing.avatar ? follwoing.avatar : userAvatar} className="w-36 h-36 bg-white rounded-xl" alt={follwoing.name} />
                        </Carousel.Item>
                    })}
                </Carousel>}
        </div>
    </TabPanel>

</TabsBody>
</Tabs> */}
