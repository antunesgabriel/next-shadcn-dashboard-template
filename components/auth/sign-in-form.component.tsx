"use client"

import { useState } from "react";
import {  Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function SignInFormComponent() {
  const [isLoading, setIsLoading] = useState(false)

  return (
     <form className="grid gap-5" onSubmit={() => {}}>
        <div className="grid gap-1 space-y-3 text-left">
          <section className="form__group">
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </section>

          <section className="form__group">
            <Label htmlFor="password">
              Senha
            </Label>

            <Input
              id="password"
              placeholder="*****"
              type="password"
              autoComplete="off"
              autoCorrect="off"
            />
          </section>
        </div>

        <Button>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

          Entrar
        </Button>
      </form>
  )
}
