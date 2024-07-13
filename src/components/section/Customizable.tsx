import Title from "../Title";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Customizable() {
  return (
    <div>
      <Title className="text-3xl font-bold text-gray-800 mb-4">
        Customizable Options
      </Title>
      <p>Here are some ideas.</p>
      <div className="flex flex-wrap *:max-w-sm gap-4 2xl:justify-between justify-center mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Switch Types</CardTitle>
            <CardDescription className="text-gray-600">
              Mechanical keyboards offer a variety of switch types, including
              linear, tactile, and clicky switches. Each type provides a
              different feel and sound, allowing you to choose the one that best
              fits your typing or gaming style.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Keycaps</CardTitle>
            <CardDescription className="text-gray-600">
              Keycaps are one of the most popular ways to customize your
              mechanical keyboard. They come in different shapes, colors, and
              materials. Whether you prefer a sleek monochrome look or a
              vibrant, multi-colored design, you can find keycaps that suit your
              aesthetic.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backlighting</CardTitle>
            <CardDescription className="text-gray-600">
              Many mechanical keyboards feature customizable RGB backlighting.
              You can create personalized lighting effects, set colors for
              individual keys, and even synchronize the lighting with other
              RGB-enabled devices for a cohesive look.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Macros and Key Remapping</CardTitle>
            <CardDescription className="text-gray-600">
              Customizing your keyboard layout and creating macros can
              significantly enhance your productivity and gaming performance.
              You can remap keys to new functions or create complex macros that
              execute multiple actions with a single keypress.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sound Dampeners</CardTitle>
            <CardDescription className="text-gray-600">
              If you prefer a quieter typing experience, you can add sound
              dampeners to your mechanical keyboard. These small rings fit
              around the switch stems to reduce the noise created when the keys
              bottom out.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cases and Frames</CardTitle>
            <CardDescription className="text-gray-600">
              The case and frame of your keyboard can also be customized.
              Options range from minimalist, low-profile designs to robust,
              high-profile frames. You can choose materials like plastic,
              aluminum, or even wood to match your style and preferences.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cable Customization</CardTitle>
            <CardDescription className="text-gray-600">
              For an extra touch of personalization, you can use custom cables.
              Coiled or straight, these cables come in various colors and
              materials, allowing you to match them with your keyboard or
              overall setup.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
