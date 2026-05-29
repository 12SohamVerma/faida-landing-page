import React, { useEffect, useRef, useState } from 'react'
import { motion, animate, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function cnUtil(...inputs) {
  return cn(inputs)
}

const ReviewSummaryCard = ({ rating, reviewCount, maxRating = 5, summaryText, className }) => {
  const ratingRef = useRef(null)
  const reviewCountRef = useRef(null)

  useEffect(() => {
    const ratingControl = animate(0, rating, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (ratingRef.current) {
          ratingRef.current.textContent = value.toFixed(1)
        }
      },
    })

    const reviewCountControl = animate(0, reviewCount, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (reviewCountRef.current) {
          reviewCountRef.current.textContent = new Intl.NumberFormat('en-US').format(Math.round(value))
        }
      },
    })

    return () => {
      ratingControl.stop()
      reviewCountControl.stop()
    }
  }, [rating, reviewCount])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.div
      className={cnUtil(
        'w-full max-w-xs rounded-xl border border-border bg-card p-6 text-center shadow-sm',
        'flex flex-col items-center justify-center',
        className,
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <motion.div key={i} custom={i} variants={starVariants}>
            <Star
              className={cnUtil(
                'h-6 w-6',
                rating >= i + 1 ? 'text-yellow-400' : 'text-muted-foreground/50',
              )}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
        <span ref={ratingRef}>0.0</span>
        <span className="text-3xl font-semibold">
          {' '}
          (<span ref={reviewCountRef}>0</span> Reviews)
        </span>
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">{summaryText}</p>
    </motion.div>
  )
}

const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, avatar, name, role, rating }, i) => (
                <div
                  className="p-6 rounded-3xl border border-border shadow-lg shadow-primary/10 max-w-xs w-full bg-card"
                  key={i}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <Star
                        key={idx}
                        className={cnUtil(
                          'h-4 w-4',
                          rating >= idx + 1 ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30',
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-foreground">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={avatar}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const ReviewsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      text: 'Faida made investing feel approachable. I learned the basics before putting in my first $25, and the lessons are clear and encouraging.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      name: 'James Wilson',
      role: 'College Student',
      rating: 5,
    },
    {
      id: 2,
      text: 'As a first-time investor, I loved how Faida explains terms in plain language. Small investments plus guidance gave me real confidence.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
      name: 'Sarah Chen',
      role: 'Recent Graduate',
      rating: 5,
    },
    {
      id: 3,
      text: 'The learn-before-you-invest path is exactly what I needed. I finally understand portfolios without feeling overwhelmed.',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces',
      name: 'Michael Brown',
      role: 'First-Time Investor',
      rating: 5,
    },
    {
      id: 4,
      text: 'Financial literacy modules are short and practical. I started small and built habits that actually stick.',
      avatar:
        'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?w=150&h=150&fit=crop&crop=faces',
      name: 'Emily Davis',
      role: 'Graduate Student',
      rating: 4,
    },
    {
      id: 5,
      text: 'Best app for beginners. The investment guidance feels supportive, not salesy — perfect when you are just getting started.',
      avatar:
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=150&h=150&fit=crop&crop=faces',
      name: 'David Martinez',
      role: 'Young Professional',
      rating: 5,
    },
    {
      id: 6,
      text: 'I recommend Faida to anyone nervous about investing. Learn first, invest small, grow at your own pace.',
      avatar:
        'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=150&h=150&fit=crop&crop=faces',
      name: 'Lisa Anderson',
      role: 'Campus Ambassador',
      rating: 5,
    },
  ]

  const firstColumn = reviews.slice(0, 2)
  const secondColumn = reviews.slice(2, 4)
  const thirdColumn = reviews.slice(4, 6)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="bg-background py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg bg-card text-foreground">
              Learner Reviews
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center text-foreground">
            What our learners say
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            See how students and first-time investors are building confidence with Faida.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <ReviewSummaryCard
            rating={4.9}
            reviewCount={2847}
            summaryText="Excellent: Rated 4.9 out of 5 based on 2,847 learner reviews"
          />
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden mb-12">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <Star
                      key={idx}
                      className={cnUtil(
                        'h-5 w-5',
                        reviews[activeIndex].rating >= idx + 1
                          ? 'text-yellow-400 fill-current'
                          : 'text-muted-foreground/30',
                      )}
                    />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  &ldquo;{reviews[activeIndex].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-lg">{reviews[activeIndex].name}</div>
                    <div className="text-muted-foreground">{reviews[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-colors"
                aria-label="Previous review"
                type="button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-colors"
                aria-label="Next review"
                type="button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={cnUtil(
                    'h-2 rounded-full transition-all',
                    idx === activeIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                  )}
                  aria-label={`Go to review ${idx + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsShowcase
