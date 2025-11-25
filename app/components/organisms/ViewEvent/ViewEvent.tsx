import PageDetailHeader from '~/components/molecules/PageDetailHeader';
import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import CarouselEvent from '../CarouselEvent';
import type { ViewEventProps } from './ViewEvent.types';
import Text from '~/components/atoms/Text';
import { motion, useWillChange } from 'framer-motion';
import Anchor from '~/components/atoms/Anchor';
import { getTextToHtml } from '~/utils/html';
import { getEventDateDisplay } from '~/utils/date';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';

const ViewEvent = ({ event }: ViewEventProps) => {
  const { title, address, country, cost, lineup, description, links } = event;
  const willChange = useWillChange();
  const transition = useFluidTransition({
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 50,
      opacity: 0.2,
    },
    style: { willChange },
  });

  return (
    <article className="o-8">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/events" />
      </PageDetailHeaderPortal>
      <motion.div className="w-full" {...transition(0.1)}>
        <CarouselEvent event={event} />
      </motion.div>
      {description && (
        <motion.div {...transition(0.2)} className="flex justify-end w-full">
          <Text.RightMd>{getTextToHtml(description)}</Text.RightMd>
        </motion.div>
      )}
      <div className="flex justify-end w-full">
        <motion.div
          {...transition(0.3)}
          className="flex justify-center gap-4 w-[48rem]"
        >
          <div className="w-1/2 o-4">
            <Text.RightMdSemiBold className="whitespace-pre-line">
              {getEventDateDisplay(event, 'Do MMMM YYYY')}
            </Text.RightMdSemiBold>
            <Text.Right>{address}</Text.Right>
            <Text.Right>{country}</Text.Right>
            <Text.Right>Price: {cost}</Text.Right>
            {links?.event ? (
              <>
                <p />
                <Anchor className="underline" href={links.event}>
                  <Text.RightMd>Event</Text.RightMd>
                </Anchor>
              </>
            ) : null}
          </div>
          <motion.div {...transition(0.3)} className="w-1/2 o-4">
            <Text.MdSemiBold>Lineup:</Text.MdSemiBold>
            <div>
              {lineup?.map((artist) => (
                <Text.Semibold key={artist}>{artist}</Text.Semibold>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
};

export default ViewEvent;
