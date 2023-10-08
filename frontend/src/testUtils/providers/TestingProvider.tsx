import React, {FC, PropsWithChildren} from "react";
import {MockedProvider, MockedResponse} from "@apollo/client/testing";

interface TestingProviderProps {
    mocks?: MockedResponse<Record<string, any>, Record<string, any>>[];
}

const TestingProvider: FC<PropsWithChildren<TestingProviderProps>> = ({ children, mocks }) => {
    return (
        <MockedProvider mocks={mocks}>
        {children}
        </MockedProvider>
    );
}

export default TestingProvider;
