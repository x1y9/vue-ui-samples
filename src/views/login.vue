<template>
  <div class="h-screen w-screen flex items-center justify-center">
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label for="terms">Remember Me</Label>
          </div>      
        </CardContent>
        <CardFooter>
          <div class="w-full">
            <Button class="w-full">Login</Button>
            <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" class="w-full">Github</Button>
              <Button variant="outline" class="w-full">Gitlab</Button>
            </div>
          </div>
        </CardFooter>
      </Card>
  </div>
</template>