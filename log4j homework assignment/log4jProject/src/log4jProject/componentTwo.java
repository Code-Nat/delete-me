package log4jProject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class componentTwo {
	
	private final Logger logger = LogManager.getLogger(this.getClass());
	
	public void functionTwo() {
		
		logger.debug("Hello");
	}

}
