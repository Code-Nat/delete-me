using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Class4Targil1.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly ICalc _calclator;

        public IndexModel(ILogger<IndexModel> logger, ICalc calclator)
        {
            _logger = logger;
            _calclator = calclator;
        }
        [BindProperty(SupportsGet = true)]
        public int calc1 { get; set; }
        [BindProperty(SupportsGet = true)]
        public int calc2 { get; set; }

        public int result { get; set; }
        public void OnGet()
        {
            result = _calclator.addNumbers(calc1, calc2);
        }
    }
}