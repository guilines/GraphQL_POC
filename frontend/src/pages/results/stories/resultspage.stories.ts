import ResultsPage from "../index";
import {getProductsMocks} from "~/mocks/getProductsMocks";

export default {
    title: 'Pages/Results',
    component: ResultsPage,
    parameters: {
        layout: 'centered',
        apolloClient: {
            mocks: getProductsMocks,
        }
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const Default = {
    args: {
    },
};
