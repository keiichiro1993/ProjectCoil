using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProjectCoil.Startup))]
namespace ProjectCoil
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
