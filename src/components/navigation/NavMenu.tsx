
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { BookOpen, FolderPlus, Plus, BookPlus } from "lucide-react"

export const NavMenu = () => {
  const { toast } = useToast()

  const handleCreateClick = (type: string) => {
    toast({
      title: `Create ${type}`,
      description: `${type} creation will be available soon!`,
    })
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Study</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleCreateClick("Study Sets")}
                >
                  <BookOpen className="mr-2" />
                  Study Sets
                </Button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleCreateClick("Test")}
                >
                  <BookOpen className="mr-2" />
                  Test
                </Button>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Create</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleCreateClick("Study Set")}
                >
                  <BookPlus className="mr-2" />
                  Study Set
                </Button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleCreateClick("Folder")}
                >
                  <FolderPlus className="mr-2" />
                  Folder
                </Button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleCreateClick("Class")}
                >
                  <Plus className="mr-2" />
                  Class
                </Button>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
