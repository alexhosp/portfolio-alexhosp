'use client';
import { RowSpacingIcon } from '@radix-ui/react-icons';
import { MotionButton } from '@/ui/Button/button';
import { Heading } from '@/ui/Heading/heading';
import Text from '@/ui/Text/text';
import {
  StaggeredAnimationWrapper,
  staggerAnimationVariants,
} from '@/ui/util/animation-wrapper';
import { motion } from 'framer-motion';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger: React.FC<{ triggerTitle: string | undefined }> = ({
  triggerTitle,
}) => {
  return (
    <CollapsiblePrimitive.Trigger asChild>
      <MotionButton className='flex flex-row items-center gap-4 md:mb-4'>
        <Heading as='h3' size='h3Small' color='default' className='md:hidden'>
          {triggerTitle}
        </Heading>
        <Heading
          as='h3'
          size='h3Default'
          color='default'
          className='hidden md:flex'
        >
          {triggerTitle}
        </Heading>
        <RowSpacingIcon className='text-[var(--color-highlight)] md:w-6 md:h-6' />
      </MotionButton>
    </CollapsiblePrimitive.Trigger>
  );
};

const CollapsibleContent: React.FC<{ listItems: string[] }> = ({
  listItems,
}) => {
  return (
    <CollapsiblePrimitive.Content className='border-2 border-[var(--color-accent-soft)] p-1.5 pt-3 md:p-6'>
      <StaggeredAnimationWrapper>
        <ul>
          {listItems.map((item, index) => {
            const parts = item.split(':');
            return (
              <motion.li
                variants={staggerAnimationVariants}
                key={index}
                className='flex flex-row items-center text-[var(--color-foreground)] py-1 pb-2 justify-center md:mb-3'
              >
                {parts.length > 1 ? (
                  // Render parts separately with different styles if a colon is found

                  <div className='flex flex-col items-center'>
                    <Heading
                      as='h3'
                      size='h3Small'
                      color='h1accent'
                      className='ml-4 mr-2 max-w-[50%] md:hidden'
                    >
                      {parts[0].trim()}
                    </Heading>
                    <Heading
                      as='h3'
                      size='h3Default'
                      color='h1accent'
                      className='hidden md:flex mb-2'
                    >
                      {parts[0].trim()}
                    </Heading>
                    <Text
                      as='span'
                      size='tiny'
                      textColor='muted'
                      className='md:hidden'
                    >
                      {parts[1].trim()}
                    </Text>
                    <Text
                      as='span'
                      size='large'
                      textColor='muted'
                      className='hidden md:block'
                    >
                      {parts[1].trim()}
                    </Text>
                  </div>
                ) : (
                  // Render the entire item if no colon is found
                  <Text
                    as='span'
                    size='small'
                    textColor='muted'
                    className='mx-4'
                  >
                    {item}
                  </Text>
                )}
              </motion.li>
            );
          })}
        </ul>
      </StaggeredAnimationWrapper>
    </CollapsiblePrimitive.Content>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
