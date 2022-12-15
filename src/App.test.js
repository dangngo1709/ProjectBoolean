import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


//checks that site doesn't render without crashing
// and/or going white screen
it("renders without crashing", () => {
    shallow(<App />);
  });
  
//makes sure site title renders
it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Display Active Users Account Details</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });


describe("", () => {

    //checking that account profile image loads
    it("accepts user account profile image", () => {
      const wrapper = mount(<Account user={user} />);
      expect(wrapper.props().user).toEqual(user);
    });

    //checking that user emails are registered into database
    //just an example instance used to check
    //to self: must check for every new email created 
    it("contains users account email", () => {
      const wrapper = mount(<Account user={user} />);
      const UserValue = wrapper.find("p").text();
      expect(UserValue).toEqual("ILoveDang@gmail.com");
    });
  

    
    //checking that user passwords are registered into database
    //just an example instance used to check
    //to self: must check for every new password created 
    it("contains users account password", () => {
        const wrapper = mount(<Account userPW = {userPW} />);
        const PWvalue = wrapper.find("p").text();
        expect(PWvalue).toEqual("Test123");
    });
});


