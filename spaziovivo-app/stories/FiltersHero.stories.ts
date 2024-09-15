import type { Meta, StoryObj } from '@storybook/react';
import FiltersHero from '@/components/Filters/FiltersHero';
import {mockProvinces, mockLocations} from '@/stories/mockData'

const meta: Meta<typeof FiltersHero> = {
    component: FiltersHero,
}

export default meta;
type Story = StoryObj<typeof FiltersHero>

export const Primary: Story = {
    args: {
        estates: mockLocations,
        provinces: mockProvinces,
    }
}
