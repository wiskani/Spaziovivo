import type { Meta, StoryObj } from '@storybook/react';
import FDropdownLocation from '@/components/Filters/FDropdownLocation';

const meta: Meta<typeof FDropdownLocation> = {
    component: FDropdownLocation,
}

export default meta;
type Story = StoryObj<typeof FDropdownLocation>

export const Primary: Story = {
    args: {

    }
}
