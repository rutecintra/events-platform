import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { ArrowRight, Copy, Mail } from "lucide-react";


export default function Home() {
  return (
    <main>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="text" placeholder="E-mail" />
        </InputRoot>

    </main>
  );
}
