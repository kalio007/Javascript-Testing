import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on intial render the pay button is deactivated", () => {

    render(<TransactionCreateStepTwo sender={{id:5}} receiver={{id:2}} />);
    screen.debug();
    
})
// screen.getRole(); this helps with knowing the particular function of each div