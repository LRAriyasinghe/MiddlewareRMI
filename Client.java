import middleware.Middleware;
class Client{
    public static void main(String[] args){
        Middleware middleware = new Middleware();
        
        try{
            System.out.println(middleware.addService(Integer.parseInt(args[0]),Integer.parseInt(args[1])));
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}