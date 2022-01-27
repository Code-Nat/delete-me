

package log4jProject;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class componentOne {
	
	private final Logger logger = LogManager.getLogger(this.getClass());
	
	public void functionOne() {
		logger.trace("Hello");
		logger.debug("Hello");
		logger.info("Hello");
		logger.warn("Hello");
		logger.error("Hello");
		logger.fatal("Hello");
		
		
	}

}
