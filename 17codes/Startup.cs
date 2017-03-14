using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_17codes.Startup))]
namespace _17codes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
