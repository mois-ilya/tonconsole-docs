'use client';

import {
  Accordion as FumadocsAccordion,
  Accordions as FumadocsAccordions,
} from 'fumadocs-ui/components/accordion';
import {
  Tab as FumadocsTab,
  Tabs as FumadocsTabs,
} from 'fumadocs-ui/components/tabs';

/**
 * Accordions - Pass-through to Fumadocs Accordions component
 * Wrapper container for Accordion items
 */
export const Accordions = FumadocsAccordions;

/**
 * Accordion - Pass-through to Fumadocs Accordion component
 * Individual accordion item - must be wrapped in Accordions
 */
export const Accordion = FumadocsAccordion;

/**
 * Tabs - Pass-through to Fumadocs Tabs component
 * Container for Tab items with language/variant selection
 * Usage: <Tabs items={['TypeScript', 'Go']}><Tab value="TypeScript">code</Tab></Tabs>
 */
export const Tabs = FumadocsTabs;

/**
 * Tab - Pass-through to Fumadocs Tab component
 * Individual tab item - must be wrapped in Tabs
 */
export const Tab = FumadocsTab;
