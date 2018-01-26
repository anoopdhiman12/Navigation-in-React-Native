import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';



class employeeCreate extends Component {
    render() {
        return (
            <Card>
                
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jame"
                    />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Phone"
                        placeholder="555-555-555"
                        />
                    </CardSection>
                    <CardSection>

                    </CardSection>
                    <CardSection>
                        <Button>
                            Create
                        </Button>
                    </CardSection>

            </Card>

        );
    }
}

export default employeeCreate;