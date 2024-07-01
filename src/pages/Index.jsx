import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stream Souq</h1>
          <nav>
            <Button variant="link" className="mr-4">Home</Button>
            <Button variant="link" className="mr-4">About</Button>
            <Button variant="link" className="mr-4">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-10 px-6">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">Discover Local Shops</h2>
          <p className="text-center text-gray-700 mb-6">Find the best local shops in different shopping areas.</p>
          <div className="flex justify-center">
            <Input type="text" placeholder="Search for shops..." className="w-1/2 mr-2" />
            <Button>Search</Button>
          </div>
        </section>

        <Separator className="my-10" />

        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Shop 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Best shop for electronics.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shop 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Great deals on fashion.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shop 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Quality home goods.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white shadow mt-10">
        <div className="container mx-auto py-4 px-6 text-center">
          <p className="text-gray-700">&copy; 2023 Stream Souq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;