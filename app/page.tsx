'use client';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import WaterWaveWrapper from '@/components/visualEffects/water-wave-wrapper';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={1}
      resolution={2048}
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="UI Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill></GoHomeFill>
                  Basic Button
                </Button>
                <Button isIcon>
                  <FaUser></FaUser>
                </Button>

                <Button link="https://www.google.com">
                  <FaGoogle />
                  Google
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}

